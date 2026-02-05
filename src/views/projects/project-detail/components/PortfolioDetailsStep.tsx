import { ProjectDetailData } from '@/types/project-d-t';

interface PortfolioDetailsStepProps {
  project: ProjectDetailData;
}

const PortfolioDetailsStep = ({ project }: PortfolioDetailsStepProps) => {
  const stepData = project.overviewSteps || [
    { title: 'Planning', description: 'Comprehensive planning and analysis phase.' },
    { title: 'Development', description: 'Implementation and development of the solution.' },
    { title: 'Delivery', description: 'Final delivery and quality assurance.' },
  ];

  return (
    <div className="tp-pd-2-step-ptb pb-70">
      <div className="container container-1230">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="tp-pd-2-step-heading pb-60 tp_fade_anim"
              data-delay=".3"
            >
              <h3 className="tp-pd-2-step-title">
                Our approach to delivering <br />
                excellence in every project <br />
                we undertake.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {stepData.map((step, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="tp-pd-2-step-item mb-30">
                <h4 className="tp-pd-2-step-item-title">
                  {(index + 1).toString().padStart(2, '0')}. {step.title}
                </h4>
                <span>{step.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsStep;
