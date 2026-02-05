import { AchievementIcon, CustomerIcon, ExperienceIcon, ProjectIcon } from '@/svg/TeamIcons';
import { TeamMemberDetail } from '@/types/team-d-t';
import AnimatedCounter from '../counter/AnimatedCounter';

interface TeamFunfactProps {
    member?: TeamMemberDetail;
    spacing?: string;
}

const TeamFunfact = ({ member, spacing = "mb-30" }: TeamFunfactProps) => {
    const stats = member?.stats;
    
    const couterData = [
        { 
            end: stats?.projectsCompleted ? Math.floor(stats.projectsCompleted / 1000) : 2, 
            suffix: "k+", 
            text: 'Projects Completed', 
            icon: <ProjectIcon /> 
        },
        { 
            end: stats?.achievements || 6, 
            suffix: "+", 
            text: 'Achievements', 
            icon: <AchievementIcon /> 
        },
        { 
            end: stats?.yearsExperience || 12, 
            suffix: "+", 
            text: 'Years of Experience', 
            icon: <ExperienceIcon /> 
        },
        { 
            end: stats?.happyCustomers || 98, 
            suffix: "%", 
            text: 'Client Satisfaction', 
            icon: <CustomerIcon /> 
        },
    ];
    
    return (
        <>
            {
                couterData.map((data, index) => (
                    <div className="col-lg-3 col-sm-6" key={index}>
                        <div className={`tp-team-part-item ${spacing}`}>
                            <div className="tp-team-part-item-title">
                                <h4><AnimatedCounter min={0} max={data.end} />{data.suffix}</h4>
                            </div> 
                            <div className="tp-team-part-item-content">
                                <p>{data.text}</p>
                                <span>{data.icon}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default TeamFunfact;