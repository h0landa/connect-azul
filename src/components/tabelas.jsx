import React from "react";


function Tabelas () {

    fetch ('../services/db_clinicas.json', {
        headers: {
            Accept: 'applicaction/json'
        }
    }).then(res => res.json())

    return (
        <div className="tabela-tab">
            <table className="tabela">
                <thead className="tabela-head">
                    <tr>
                        {db_clinicas.Clinicas.name}
                    </tr>
                </thead>

            </table>
        </div>

    );
};

export default Tabelas;