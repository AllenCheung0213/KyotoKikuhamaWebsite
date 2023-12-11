import MappingContent from "./MappingContent";

const Mapping2023 = () => {
    return (
        <section id="data" className="open-data">
            <h1>Open Data 2023</h1>
            <p>To enhance the project's feasibility and accessibility, we have designated this website as a central repository for all open data pertaining to past and future project participants, as well as anyone interested in the project. The spreadsheet contains information on all buildings, including their assigned lot number, building type, business name (with owner names redacted), construction status, and accompanying images. Additionally, a link to the drive folder is provided for convenient access to pictures of buildings in Kikuhama.</p>

            <div className="styled-table">
                <table style={{class: "center", borderCollapse: "collapse", width: "100%"}}>
                    <thead>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center", fontSize: "20px"}}>Data</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center", fontSize: "20px"}}>Link</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center", fontSize: "20px"}}>Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left"}}>Spreadsheet</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left"}}><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQc3TuPSBYpiyIPbbLMiJ7QSEbXVSInyQ8BTC83Li-AI2asn_G64mFLp3l0Zc1TxK3YMRgpQJ-9TnFW/pubhtml" download>
                            Open Link</a></td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Spreadsheet has building data: label, type, name, construction, and picture. The spreadsheet includes data for A, B, and C (pre 2023) also also for all the sections found this year (2023).</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Drive folder</td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}><a href="https://drive.google.com/drive/folders/1mANd9oa0O6ETXyvy45AXvjr3JdFCrWke?usp=sharing" download>
                            Open Link</a></td>
                        <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>This drive folder contains the pictures of every single building in Kikuhama. These pictures can be updated by future project groups to discern visual changes in the lots.</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </section>
    )
}
export default Mapping2023;