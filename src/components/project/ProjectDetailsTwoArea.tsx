import { ProjectDetailData } from "@/types/project-d-t";

interface ProjectDetailsTwoAreaProps {
    project: ProjectDetailData;
}

const ProjectDetailsTwoArea = ({ project }: ProjectDetailsTwoAreaProps) => {
    const info = project.info ?? [
        { label: "Client", value: "Client" },
        { label: "Role", value: project.categories?.[0] ?? "Logistics" },
        { label: "Duration", value: "2024-2025" },
        { label: "Designer", value: "Agntix" },
    ];
    const categories = project.categories ?? ["Logistics"];

    return (
        <div className="tp-pd-2-ptb pt-200 pb-80">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="tp-pd-2-top pb-70 text-center">
                            <div className="tp-pd-2-categories mb-30 tp_fade_anim" data-delay=".3">
                                {categories.map((cat, i) => (
                                    <span key={i}>{cat}</span>
                                ))}
                            </div>
                            <h3 className="tp-pd-2-title tp_fade_anim" data-delay=".5">
                                {project.title}
                            </h3>
                        </div>
                        <div className="tp-pd-2-bottom d-flex justify-content-between tp_fade_anim" data-delay=".7">
                            {info.map((item, i) => (
                                <div key={i} className="tp-pd-2-bottom-item text-center">
                                    <span>{item.label}</span>
                                    <h6>{item.value}</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsTwoArea;
