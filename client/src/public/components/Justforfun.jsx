// MultiStepForm.js
import React, { useState } from 'react';

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => Math.max(1, prevStep - 1));
    };

    const handleSubmit = () => {

    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <label>Step 1</label>
                        <input type="text" name="input1" placeholder="Input 1" />
                        <input type="text" name="input2" placeholder="Input 2" />
                        <input type="text" name="input3" placeholder="Input 3" />
                        <input type="text" name="input4" placeholder="Input 4" />
                        <input type="text" name="input5" placeholder="Input 5" />
                    </>
                );
            case 2:
                return (
                    <>
                        <label>Step 2</label>
                        <input type="text" name="input1" placeholder="Input 1" />
                        <input type="text" name="input2" placeholder="Input 2" />
                        <input type="text" name="input3" placeholder="Input 3" />
                        <input type="text" name="input4" placeholder="Input 4" />
                        <input type="text" name="input5" placeholder="Input 5" />
                    </>
                );
            case 3:
                return (
                    <>
                        <label>Step 3</label>
                        <input type="text" name="input1" placeholder="Input 1" />
                        <input type="text" name="input2" placeholder="Input 2" />
                        <input type="text" name="input3" placeholder="Input 3" />
                        <input type="text" name="input4" placeholder="Input 4" />
                        <input type="text" name="input5" placeholder="Input 5" />
                    </>
                );
            case 4:
                return (
                    <>
                        <label>Step 4</label>
                        <input type="text" name="input1" placeholder="Input 1" />
                        <input type="text" name="input2" placeholder="Input 2" />
                        <input type="text" name="input3" placeholder="Input 3" />
                        <input type="text" name="input4" placeholder="Input 4" />
                        <input type="text" name="input5" placeholder="Input 5" />
                    </>
                );
            case 5:
                return (
                    <>
                        <label>Step 5</label>
                        <input type="text" name="input1" placeholder="Input 1" />
                        <input type="text" name="input2" placeholder="Input 2" />
                        <input type="text" name="input3" placeholder="Input 3" />
                        <input type="text" name="input4" placeholder="Input 4" />
                        <input type="text" name="input5" placeholder="Input 5" />
                    </>
                );

            // Add additional cases for other steps if needed
            default:
                return null;
        }
    };

    return <>

        {renderStep()}

        {/* Render Previous and Next buttons */}
        {currentStep > 1 && (
            <button
                variant="secondary"
                type="button"
                onClick={handlePrevious}
            >
                Previous
            </button>
        )}
        {' '}
        <button
            variant="primary"
            type="button"
            onClick={currentStep < 5 ? handleNext : handleSubmit}
        >
            {currentStep < 5 ? 'Next' : 'Submit'}
        </button>

    </>
};

export default MultiStepForm;
