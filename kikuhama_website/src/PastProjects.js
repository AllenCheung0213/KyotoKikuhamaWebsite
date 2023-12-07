import MappingContent from "./MappingContent";
import IQP2019 from "./iqpreports/2019Report.pdf";
import IQP2021 from "./iqpreports/2021Report.pdf";
import IQP2022a from "./iqpreports/2022aReport.pdf";
import IQP2022 from "./iqpreports/2022Report.pdf";
const PastProjects = () => {
    return(
        <section id="pastProjects" className="pastProject">

            <h1>Past Projects</h1>
            <div className="over-the-years">
                {/* Row 1 */}
                <div className="pdf-row">
                    <div className="pdf-embed">
                        <embed src={IQP2019} type="application/pdf" width="85%" height="400px" />
                        <p className="caption">Mapping for the Future of Gojo Rakuen (2019)</p>
                    </div>
                    <div className="pdf-embed">
                        <embed src={IQP2021} type="application/pdf" width="85%" height="400px" />
                        <p className="caption">Mapping for Vital Kyoto: A Case Study on Kikuhama (2021)</p>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="pdf-row">
                    <div className="pdf-embed">
                        <embed src={IQP2022a} type="application/pdf" width="85%" height="400px" />
                        <p className="caption">Unrooting the Issue: Conflict Resolution of Urban River Restoration, Kikuhama (2022)</p>
                    </div>
                    <div className="pdf-embed">
                        <embed src={IQP2022} type="application/pdf" width="85%" height="400px" />
                        <p className="caption">Community-Centered Activity Along The Takase River (2022)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PastProjects;