import { ProjectDetailData } from '@/types/project-d-t';

interface PortfolioDetailsBrandOverviewProps {
    project: ProjectDetailData;
}

const PortfolioDetailsBrandOverview = ({ project }: PortfolioDetailsBrandOverviewProps) => {
    const brandOverview = project.brandOverview || {
        paragraphs: [project.description || ''],
        features: [],
    };

    return (
        <div className="tp-pd-2-overview-ptb pb-70">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-pd-2-overview-heading tp_fade_anim" data-delay=".3">
                            <h3 className="tp-pd-2-overview-title">Project Overview</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-pd-2-overview-wrap">
                            {brandOverview.paragraphs?.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                            {brandOverview.features && brandOverview.features.length > 0 && (
                                <ul>
                                    {brandOverview.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsBrandOverview;
