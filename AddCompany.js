import React from 'react';
import {Button, Field, Message, Modal} from "../ui";
import {useState} from "react";
import db from "../firebase";

function AddCompany({setToasts}) {

    const [companyNo, setCompanyNo] = useState("")
    const [companyMajor, setCompanyMajor] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [companyNumber, setCompanyNumber] = useState("")
    const [companyComname, setCompanyComName] = useState("")
    const [companyEmail, setCompanyEmail] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const[isModal,setIsModal] = useState(false);


    const handleCompany = async (e) => {
        e.preventDefault()
        setLoading(true);

        try{
            await db.collection('companys').add({
                no: companyNo,
                major: companyMajor,
                name: companyName,
                number: parseInt(companyNumber),
                comname: companyComname,
                email: companyEmail,
            })
                .then((docRef)=>{(
                    console.log(docRef))
                }
                )
            setToasts(["성공했습니다. "])
        }catch (e){
            setError("에러가 발생했습니다. ")
        }

        setCompanyNo("");
        setCompanyMajor("");
        setCompanyName("");
        setCompanyNumber("");
        setCompanyComName("");
        setCompanyEmail("");
        setLoading(false);
    }

    return (
        <>
            <Button onClick={()=> (setIsModal(true),setError(null))}> 추가하기 </Button>

            <Modal title ="추가" show={isModal} close={()=>setIsModal(false)}>
                <form>
                    <Field labelText="번호" id="no">
                        <input type="number" name="num" id="no" value={companyNo} placeholder="제목"
                               onChange={(e) => setCompanyNo(e.target.value)}/>
                    </Field>
                    <Field labelText="전공" id="major">
                        <input type="text" name="maj" id="major"
                               value={companyMajor} placeholder="전공" onChange={(e) => setCompanyMajor(e.target.value)}/>
                    </Field>
                    <Field labelText="이름" id="stu-name">
                        <input type="text" name="name" id="stu-name"
                               value={companyName} placeholder="이름" onChange={(e) => setCompanyName(e.target.value)}/>
                    </Field>
                    <Field labelText="학번" id="class-number">
                        <input type="number" name="class-num" id="class-number"
                               value={companyNumber} placeholder="학번" onChange={(e) => setCompanyNumber(e.target.value)}/>
                    </Field>
                    <Field labelText="기업명" id="company-name">
                        <input type="text" name="com-name" id="company-name"
                               value={companyComname} placeholder="기업명" onChange={(e) => setCompanyComName(e.target.value)}/>
                    </Field>
                    <Field labelText="주소" id="email-adress">
                        <input type="text" name="mail" id="email-adress"
                               value={companyEmail} placeholder="주소" onChange={(e) => setCompanyEmail(e.target.value)}/>
                    </Field>

                    <Button type="submit" onClick={handleCompany} disabled={loading}>{loading ? "저장중입니다..." : "저장하기" }</Button>

                    <Message text={error} type='error'/>
                </form>
            </Modal>




        </>
    );
}

export default AddCompany;