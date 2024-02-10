import React from 'react'

const Faq = () => {
    return <>
        <div className="container mb-5 mt-3">
            <h3 className="text-center mb-3 h1">Frequently Asked Questions?</h3>

            {/* FAQ Section */}
            <div id="faqAccordion">

                {/* Question 1 */}
                <div className="card border-0">
                    <div className="card-header bg-light" id="question1">
                        <h5 className="mb-0">
                            <button className="btn btn-link text-dark " data-bs-toggle="collapse" data-bs-target="#answer1" aria-expanded="true" aria-controls="answer1">
                                Why choose organic products?
                            </button>
                        </h5>
                    </div>

                    <div id="answer1" className="collapse show" aria-labelledby="question1" data-parent="#faqAccordion">
                        <div className="card-body">
                            Organic products are a healthier and environmentally friendly choice. They are grown without synthetic pesticides, herbicides, and genetically modified organisms, promoting overall well-being and sustainability.
                        </div>
                    </div>
                </div>

                {/* Question 2 */}
                <div className="card border-0">
                    <div className="card-header bg-light" id="question2">
                        <h5 className="mb-0">
                            <button className="btn btn-link text-dark collapsed" data-bs-toggle="collapse" data-bs-target="#answer2" aria-expanded="false" aria-controls="answer2">
                                What are the benefits of consuming organic food?
                            </button>
                        </h5>
                    </div>

                    <div id="answer2" className="collapse" aria-labelledby="question2" data-parent="#faqAccordion">
                        <div className="card-body">
                            Organic food is rich in nutrients, free from harmful chemicals, and supports sustainable farming practices. It can contribute to improved health, better taste, and reduced environmental impact.
                        </div>
                    </div>
                </div>

                {/* Question 3 */}
                <div className="card border-0">
                    <div className="card-header bg-light" id="question3">
                        <h5 className="mb-0">
                            <button className="btn btn-link text-dark collapsed" data-bs-toggle="collapse" data-bs-target="#answer3" aria-expanded="false" aria-controls="answer3">
                                Are organic products better for the environment?
                            </button>
                        </h5>
                    </div>

                    <div id="answer3" className="collapse" aria-labelledby="question3" data-parent="#faqAccordion">
                        <div className="card-body">
                            Yes, choosing organic products supports eco-friendly farming practices. Organic farming reduces soil and water pollution, conserves biodiversity, and promotes sustainable agriculture methods, contributing to a healthier planet.
                        </div>
                    </div>
                </div>

                {/* Question 4 */}
                <div className="card border-0">
                    <div className="card-header bg-light" id="question4">
                        <h5 className="mb-0">
                            <button className="btn btn-link text-dark collapsed" data-bs-toggle="collapse" data-bs-target="#answer4" aria-expanded="false" aria-controls="answer4">
                                Are there any health benefits of using organic skincare products?
                            </button>
                        </h5>
                    </div>

                    <div id="answer4" className="collapse" aria-labelledby="question4" data-parent="#faqAccordion">
                        <div className="card-body">
                            Yes, organic skincare products are free from harmful chemicals and synthetic additives, making them gentler on the skin. They can provide nourishment, hydration, and promote healthier skin without exposure to potentially harmful substances.
                        </div>
                    </div>
                </div>

            </div>
            {/* End FAQ Section */}
        </div>
    </>
}

export default Faq