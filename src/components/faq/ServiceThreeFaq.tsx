import { FaqEntry } from "@/types/custom-d-t";

const DEFAULT_FAQS: FaqEntry[] = [
    { question: 'How long does it take to get started?', answer: 'It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it\'s off to signing off, kicking off.', isOpen: true },
    { question: 'What is your typical working process?', answer: 'We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it\'s off to signing off, kicking off.' },
    { question: 'How do you usually start new collaborations?', answer: 'We start with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it\'s off to signing off, kicking off.' },
    { question: 'What\'s the average project duration?', answer: 'It depends on scope and complexity. We share timeline estimates in the price proposal after the initial assessment.' },
    { question: 'Can we start the design without wireframes?', answer: 'We recommend starting with clear requirements and scope. We can discuss the best approach for your project.' },
];

interface FAQItemRender {
    id: string;
    question: string;
    answer: string;
    isOpen?: boolean;
}

interface ServiceThreeFaqProps {
    faqs?: FaqEntry[];
    accordionId?: string;
}

const ServiceThreeFaq = ({ faqs: propFaqs, accordionId = "accordionExample1" }: ServiceThreeFaqProps) => {
    const entries: FaqEntry[] = propFaqs && propFaqs.length > 0 ? propFaqs : DEFAULT_FAQS;
    const faqs: FAQItemRender[] = entries.map((entry, index) => ({
        id: `faq-${accordionId}-${index}`,
        question: entry.question,
        answer: entry.answer,
        isOpen: entry.isOpen ?? index === 0,
    }));

    const FAQItem = ({ item }: { item: FAQItemRender }) => (
        <div className="accordion-items">
            <h2 className="accordion-header">
                <button
                    className={`accordion-buttons ${!item.isOpen ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.id}`}
                    aria-expanded={item.isOpen ? 'true' : 'false'}
                    aria-controls={item.id}
                >
                    {item.question}
                    <span className="accordion-icon"></span>
                </button>
            </h2>
            <div
                id={item.id}
                className={`accordion-collapse collapse ${item.isOpen ? 'show' : ''}`}
                data-bs-parent={`#${accordionId}`}
            >
                <div className="accordion-body">
                    <p>{item.answer}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="app-faq-area service-faq-style p-relative pb-140">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="app-faq-heading p-relative text-center">
                            <h3 className="tp-section-title-mango fs-100">Frequently asked questions</h3>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="app-faq-wrap">
                            <div className="ai-faq-accordion-wrap">
                                <div className="accordion" id={accordionId}>
                                    {faqs.map((faq) => (
                                        <FAQItem key={faq.id} item={faq} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceThreeFaq;