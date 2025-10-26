import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/NavbarLogged";
import "./Transaction.css";

export default function Transaction() {

  return (
    <>
      <Navbar />
      <div className="TransactionSpacer"></div>
        <div className="transaction-container">
        <h1 className='transaction-title'>Transactions</h1>
        <h3 className='date-transaction'>October 26th, 2025</h3>
        <details className="info-dropdown">
            <summary className="summary-transaction">
                <span>Donation to Mexican Red Cross AC</span>
                <span >$ 8,450.00</span>
            </summary>

            <div className="table-transaction">
                <div className="table-grid">
                    <div className="label-transaction">Concept</div>
                    <div className="value-transaction">Humanitarian Aid & Disaster Relief</div>

                    <div className="label-transaction">Status</div>
                    <div className="value-transaction">Completed - Invoice Issued</div>

                    <div className="label-transaction">Reference</div>
                    <div className="value-transaction">REF-CRM-102625-001</div>

                    <div className="label-transaction">NGO Tax ID</div>
                    <div className="value-transaction">CRM850421-XY3</div>

                    <div className="label-transaction">Paid with</div>
                    <div className="value-transaction">WindPower Solutions Mexico AC - RFC: WPS920315-ABC</div>

                    <div className="label-transaction">NGO Tax Certificate</div>
                    <div className="value-transaction">Valid until Dec 31, 2025</div>

                    <div className="label-transaction">Transaction ID</div>
                    <div className="value-transaction">TXN-2025-10-26-8450-CRM</div>

                    <div className="label-transaction">Invoice</div>
                    <div className="detail-row">
                        <a style={{cursor: "pointer", fontSize: "0.9em"}} target="_blank" rel="noreferrer">
                            <div>Invoice_RedCross_102625.pdf</div>
                        </a>
                    </div>

                </div>
            </div>

        </details>

        <details className="info-dropdown">
            <summary className="summary-transaction">
                <span>Donation to Street Children Foundation IAP</span>
                <span >$ 5,200.00</span>
            </summary>

            <div className="table-transaction">
                <div className="table-grid">
                    <div className="label-transaction">Concept</div>
                    <div className="value-transaction">Child Welfare & Education Programs</div>

                    <div className="label-transaction">Status</div>
                    <div className="value-transaction">Completed - Invoice Issued</div>

                    <div className="label-transaction">Reference</div>
                    <div className="value-transaction">REF-SCF-102625-002</div>

                    <div className="label-transaction">NGO Tax ID</div>
                    <div className="value-transaction">SCF971205-KL8</div>

                    <div className="label-transaction">Paid with</div>
                    <div className="value-transaction">WindPower Solutions Mexico AC - RFC: WPS920315-ABC</div>

                    <div className="label-transaction">NGO Tax Certificate</div>
                    <div className="value-transaction">Valid until Dec 31, 2025</div>

                    <div className="label-transaction">Transaction ID</div>
                    <div className="value-transaction">TXN-2025-10-26-5200-SCF</div>

                    <div className="label-transaction">Invoice</div>
                    <div className="detail-row">
                        <a style={{cursor: "pointer", fontSize: "0.9em"}} target="_blank" rel="noreferrer">
                            <div>Invoice_StreetChildren_102625.pdf</div>
                        </a>
                    </div>
                </div>
            </div>

        </details>
        
        <h3 className='date-transaction'>October 10th, 2025</h3>
        <details className="info-dropdown">
            <summary className="summary-transaction">
                <span>Donation to Reforest Mexico AC</span>
                <span >$ 12,750.00</span>
            </summary>

            <div className="table-transaction">
                <div className="table-grid">
                    <div className="label-transaction">Concept</div>
                    <div className="value-transaction">Reforestation & Environmental Conservation</div>

                    <div className="label-transaction">Status</div>
                    <div className="value-transaction">Completed - Invoice Issued</div>

                    <div className="label-transaction">Reference</div>
                    <div className="value-transaction">REF-RFM-101025-003</div>

                    <div className="label-transaction">NGO Tax ID</div>
                    <div className="value-transaction">RFM080917-PQ5</div>

                    <div className="label-transaction">Paid with</div>
                    <div className="value-transaction">WindPower Solutions Mexico AC - RFC: WPS920315-ABC</div>

                    <div className="label-transaction">NGO Tax Certificate</div>
                    <div className="value-transaction">Valid until Dec 31, 2025</div>

                    <div className="label-transaction">Transaction ID</div>
                    <div className="value-transaction">TXN-2025-10-10-12750-RFM</div>

                    <div className="label-transaction">Invoice</div>
                    <div className="detail-row">
                        <a style={{cursor: "pointer", fontSize: "0.9em"}} target="_blank" rel="noreferrer">
                            <div>Invoice_ReforestMexico_101025.pdf</div>
                        </a>
                    </div>
                </div>
            </div>

        </details>
        </div>
     </>
  );
}
