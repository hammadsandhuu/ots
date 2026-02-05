import defaultImage from '../../../public/assets/img/team/team-details.jpg';
import { DribbleTwo, FacebookTwo, TwitterTwo } from '@/svg';
import { TeamMemberDetail } from '@/types/team-d-t';
import AnimatedCounter from '../counter/AnimatedCounter';
import { EmailIconFive } from '@/svg/EmailIcons';
import { PhoneIcon } from '@/svg/PhoneIcon';
import Image from 'next/image';
import Link from 'next/link';

interface TeamDetailsProps {
    member: TeamMemberDetail;
}

const TeamDetails = ({ member }: TeamDetailsProps) => {
    const image = member.detailImage || defaultImage;
    const details = member.details || {};
    const experience = member.experience || [];
    const skills = member.skills || [];

    return (
        <section className="tp-team-details-area tp-team-details-ptb pb-70">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-team-details-wrap">
                            <div className="tp-team-details-thumb mb-40">
                                <Image style={{ width: "100%", height: "auto" }} src={image} alt={member.name} />
                            </div>
                            <div className="tp-team-details-info d-flex justify-content-between">
                                <div className="tp-team-details-info-contact">
                                    {member.phone && (
                                        <Link href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}>
                                            <PhoneIcon /> {member.phone}
                                        </Link>
                                    )}
                                    {member.email && (
                                        <Link href={`mailto:${member.email}`}>
                                            <EmailIconFive /> {member.email}
                                        </Link>
                                    )}
                                </div>
                                <div className="tp-team-details-info-social">
                                    <div className="tp-footer-widget-social">
                                        {member.socialLinks?.facebook && (
                                            <Link href={member.socialLinks.facebook}>
                                                <span><FacebookTwo /></span>
                                            </Link>
                                        )}
                                        {member.socialLinks?.twitter && (
                                            <Link href={member.socialLinks.twitter}>
                                                <span><TwitterTwo /></span>
                                            </Link>
                                        )}
                                        {member.socialLinks?.linkedin && (
                                            <Link href={member.socialLinks.linkedin}>
                                                <span><DribbleTwo /></span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-team-details-wrapper">
                            <div className="tp-team-details-text">
                                <span className="tp-team-details-text-sub">{member.position}</span>
                                <h4 className="tp-team-details-text-title">{member.name}</h4>
                                <p>{member.bio}</p>
                            </div>
                            <div className="tp-team-details-more mb-50">
                                <h4 className="tp-team-details-more-title">More details</h4>
                                <ul>
                                    {details.location && <li><span>Location:</span>{details.location}</li>}
                                    <li><span>Position:</span>{member.position}</li>
                                    {member.email && <li><span>Email:</span>{member.email}</li>}
                                    {details.age && <li><span>Age:</span>{details.age}</li>}
                                    {details.qualification && <li><span>Qualification:</span>{details.qualification}</li>}
                                    {details.gender && <li><span>Gender:</span>{details.gender}</li>}
                                </ul>
                            </div>
                            {experience.length > 0 && (
                                <div className="tp-team-details-more mb-50">
                                    <h4 className="tp-team-details-more-title">Experience</h4>
                                    <ul>
                                        {experience.map((exp, index) => (
                                            <li key={index}>{exp}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {skills.length > 0 && (
                                <div className="tp-team-details-progress mb-50">
                                    <h4 className="tp-team-details-more-title mb-35">My Skills</h4>
                                    {skills.map((skill, index) => (
                                        <div key={index} className="tp-team-details-progress mb-35">
                                            <h6 className="tp-team-details-progress-title">{skill.name}</h6>
                                            <div className="tp-team-details-progress-inner">
                                                <div 
                                                    className="tp-team-details-progress-bar" 
                                                    role="progressbar" 
                                                    style={{ width: `${skill.percentage}%` }} 
                                                    aria-valuenow={skill.percentage} 
                                                    aria-valuemin={0} 
                                                    aria-valuemax={100}
                                                >
                                                    <h6 className="tp-team-details-progress-counter">
                                                        <AnimatedCounter min={0} max={skill.percentage} />%
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="tp-team-details-input mb-50">
                                <h4 className="tp-team-details-more-title mb-35">Think I can help?</h4>
                                <div className="tp-team-details-input-content">
                                    <div className="row gx-20">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Your name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Your email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="text" placeholder="Your website url" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="tp-team-details-input-btn">
                                        <button>Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamDetails;