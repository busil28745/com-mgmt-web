import React from 'react';

function CompanyItem({company}) {
    return (
                <div className="company-item">
                    <br />
                    <strong>번호:{" "}</strong> {company.no}
                    <br />
                    <span><strong>전공:{" "}</strong> {company.no}</span>
                    <br />
                    <span><strong>이름:{" "}</strong> {company.name}</span>
                    <br />
                    <span><strong>학번:{" "}</strong> {company.number}</span>
                    <br />
                    <span><strong>기업명:{" "}</strong> {company.comname}</span>
                    <br />
                    <span><strong>메일주소:{" "}</strong> {company.email}</span>
                </div>

    );
}

export default CompanyItem;