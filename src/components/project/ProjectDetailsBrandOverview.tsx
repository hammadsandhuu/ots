import { ProjectDetailData } from "@/types/project-d-t";

interface ProjectDetailsBrandOverviewProps {
    project: ProjectDetailData;
}

const ProjectDetailsBrandOverview = ({ project }: ProjectDetailsBrandOverviewProps) => {
    const overview = project.brandOverview ?? {
        paragraphs: [project.description ?? `Our team delivered ${project.title} with precision and care.`],
        features: project.categories ?? ["Logistics", "Freight", "Delivery"],
    };
    const paragraphs = overview.paragraphs ?? [];
    const features = overview.features ?? [];

    return (
        <div className="tp-pd-2-overview-ptb pb-70">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-pd-2-overview-heading tp_fade_anim" data-delay=".3">
                            <h3 className="tp-pd-2-overview-title">Brand overview</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-pd-2-overview-wrap">
                            {paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                            {features.length > 0 && (
                                <ul>
                                    {features.map((feature, i) => (
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

export default ProjectDetailsBrandOverview;
