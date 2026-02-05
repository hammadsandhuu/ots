import { ProjectDetailData } from '@/types/project-d-t';

interface PortfolioDetailsTwoAreaProps {
  project: ProjectDetailData;
}

const PortfolioDetailsTwoArea = ({ project }: PortfolioDetailsTwoAreaProps) => {
  const categories = project.categories || [];
  const info = project.info || [
    { label: 'Client', value: project.client || 'N/A' },
    { label: 'Role', value: project.services || 'N/A' },
    { label: 'Duration', value: project.year || 'N/A' },
    { label: 'Team', value: 'Agntix' },
  ];

  return (
    <div className="tp-pd-2-ptb pt-200 pb-80">
      <div className="container container-1230">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* top section */}
            <div className="tp-pd-2-top pb-70 text-center">
              <div
                className="tp-pd-2-categories mb-30 tp_fade_anim"
                data-delay=".3"
              >
                {categories.map((cat, i) => (
                  <span key={i}>{cat}</span>
                ))}
              </div>
              <h3 className="tp-pd-2-title tp_fade_anim" data-delay=".5">
                {project.title}
              </h3>
            </div>

            {/* bottom info */}
            <div
              className="tp-pd-2-bottom d-flex justify-content-between tp_fade_anim"
              data-delay=".7"
            >
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

export default PortfolioDetailsTwoArea;
