const gradeData = {
    "0": {
        name: "اعدادي",
        next: "term",
        terms: {
            "1": { name: "First Term", divisor: 7.5, subjects: ["Drawing", "Math", "English", "Static", "Chemistry", "Heat Transfer", "History"] },
            "2": { name: "Second Term", divisor: 7.5, subjects: ["Math 2", "Electricity And Magnetis", "Computer", "Dynamics", "Production", "Nile River", "Human Rights"] },
            "3": { name: "Whole Year", divisor: 15, subjects: ["Drawing", "Math", "English", "Static", "Chemistry", "Heat Transfer", "History", "Math 2", "Electricity And Magnetis", "Computer", "Dynamics", "Production", "Nile River", "Human Rights"] }
        }
    },
    "1": {
        name: "Level 1",
        next: "department",
        departments: {
            "1": {
                name: "Electric",
                next: "term",
                terms: {
                    "1": { name: "First Term", divisor: 7.5, subjects: ["Civil", "Circuits 1", "Electromagnetic Filds", "Electronics", "Modren Physics", "Probility And Statistics"] },
                    "2": { name: "Second Term", divisor: 7.5, subjects: ["Circuits 2", "Differential Equations", "logic Design", "Measurments", "Mechanics", "Communication Skills"] },
                    "3": { name: "Whole Year", divisor: 15, subjects: ["Civil", "Circuits 1", "Electromagnetic Filds", "Electronics", "Modren Physics", "Probility And Statistics", "Circuits 2", "Differential Equations", "logic Design", "Measurments", "Mechanics", "Communication Skills"] }
                }
            },
            "2": {
                name: "Civil",
                next: "term",
                terms: {
                    "1": { name: "First Term", divisor: 7.5, subjects: ["Math", "Rigid Body Mechanics", "Construction Analysis", "Civil Drawing", "Survey"] },
                    "2": { name: "Second Term", divisor: 7.5, subjects: ["Construction Mechanics", "Materials Resistance And Technology", "Survey 2", "Engineering Geology", "Communication Skills", "Probility And Statistics"] },
                    "3": { name: "Whole Year", divisor: 15, subjects: ["Math", "Rigid Body Mechanics", "Construction Analysis", "Civil Drawing", "Survey", "Construction Mechanics", "Materials Resistance And Technology", "Survey 2", "Engineering Geology", "Communication Skills", "Probility And Statistics"] }
                }
            },
            "3": {
                name: "Architecture",
                next: "term",
                terms: {
                    "1": { name: "First Term", divisor: 7.25, subjects: ["Architectural Design", "Theories Of Architecture And Design", "Building Materials", "Material Properties", "Probility And Statistics", "Elective Course"] },
                    "2": { name: "Second Term", divisor: 7.75, subjects: ["Architectural Design 2", "History Of Architecture", "Architectural Drawing", "Building Materials 2", "Survey", "Elective Course 2"] },
                    "3": { name: "Whole Year", divisor: 15, subjects: ["Architectural Design", "Theories Of Architecture And Design", "Building Materials", "Material Properties", "Probility And Statistics", "Elective Course", "Architectural Design 2", "History Of Architecture", "Architectural Drawing", "Building Materials 2", "Survey", "Elective Course 2"] }
                }
            }
        }
    },
    "2": {
        name: "Level 2",
        next: "department",
        departments: {
            "1": {
                name: "Electric",
                next: "sub_department",
                sub_departments: {
                    "1": {
                        name: "Communication",
                        next: "term",
                        terms: {
                            "1": { name: "First Term", divisor: 7.5, subjects: ["Analog Electronics 1", "Analog Electronics 2", "Programming", "Numerical Analysis", "Signals And Systems", "Technical Writing"] },
                            "2": { name: "Second Term", divisor: 7.5, subjects: ["Computer Organization", "Digital Electronics", "Microcontrollers", "Communication Systems", "System Dynamics", "Analysis Skill"] },
                            "3": { name: "Whole Year", divisor: 15, subjects: ["Analog Electronics 1", "Analog Electronics 2", "Programming", "Numerical Analysis", "Signals And Systems", "Technical Writing", "Computer Organization", "Digital Electronics", "Microcontrollers", "Communication Systems", "System Dynamics", "Analysis Skill"] }
                        }
                    },
                    "2": {
                        name: "Power",
                        next: "term",
                        terms: {
                            "1": { name: "First Term", divisor: 7.5, subjects: ["Energy Conversion", "High Voltage", "Signals Processing", "System Dynamics", "Numerical Analysis", "Technical Writing"] },
                            "2": { name: "Second Term", divisor: 7.5, subjects: ["Renewable Energy", "Transmission And Distribution", "Electrical Machines", "Microcontrollers", "Communication Systems", "Analysis Skill"] },
                            "3": { name: "Whole Year", divisor: 15, subjects: ["Energy Conversion", "High Voltage", "Signals Processing", "System Dynamics", "Numerical Analysis", "Technical Writing", "Renewable Energy", "Transmission And Distribution", "Electrical Machines", "Microcontrollers", "Communication Systems", "Analysis Skill"] }
                        }
                    }
                }
            },
            "2": {
                name: "Civil",
                next: "term",
                terms: {
                    "1": { name: "First Term", divisor: 7.5, subjects: ["Construction Analysis 2", "Materials Resistance And Technology 2", "Fluid Mechanics", "Electric", "Planning And Construction", "Elective Course 1"] },
                    "2": { name: "Second Term", divisor: 7.5, subjects: ["Construction Mechanics 2", "Reinforced Concrete", "Geomatics Engineering", "Irrigation And Drainage Engineering", "Construction Project Management"] },
                    "3": { name: "Whole Year", divisor: 15, subjects: ["Construction Analysis 2", "Materials Resistance And Technology 2", "Fluid Mechanics", "Electric", "Planning And Construction", "Elective Course 1", "Construction Mechanics 2", "Reinforced Concrete", "Geomatics Engineering", "Irrigation And Drainage Engineering", "Construction Project Management"] }
                }
            },
            "3": {
                name: "Architecture",
                next: "term",
                terms: {
                    "1": { name: "First Term", divisor: 7.5, subjects: ["Architectural Design 3", "Theories Of Architecture And Design 2", "Building Materials 3", "History And Theories Of Architecture", "Environmental Control", "Elective Course 3"] },
                    "2": { name: "Second Term", divisor: 7.5, subjects: ["Architectural Design 4", "History Of Architecture 2", "Urban Design", "Building Materials 4", "Humanities In Architecture", "Environmental Control 2"] },
                    "3": { name: "Whole Year", divisor: 15, subjects: ["Architectural Design 3", "Theories Of Architecture And Design 2", "Building Materials 3", "History And Theories Of Architecture", "Environmental Control", "Elective Course 3", "Architectural Design 4", "History Of Architecture 2", "Urban Design", "Building Materials 4", "Humanities In Architecture", "Environmental Control 2"] }
                }
            }
        }
    },
    "3": {
        name: "Level 3",
        next: "department",
        departments: {
            "1": {
                name: "Electric",
                next: "sub_department",
                sub_departments: {
                    "1": {
                        name: "Communication",
                        next: "term",
                        terms: {
                            "1": { name: "First Term", divisor: 7.5, subjects: ["Analog Entgrated Circuits", "Energy And Renewable Energy", "Electromagnetic Waves", "Analog And Digital Communications", "Automatic Control", "Engineering Economics"] },
                            "2": { name: "Second Term", divisor: 7.5, subjects: ["Photoelectrons", "Embedded Systems", "Superior IC", "Project Management", "ElectiveCourse 1", "ElectiveCourse 2"] },
                            "3": { name: "Whole Year", divisor: 15, subjects: ["Analog Entgrated Circuits", "Energy And Renewable Energy", "Electromagnetic Waves", "Analog And Digital Communications", "Automatic Control", "Engineering Economics", "Photoelectrons", "Embedded Systems", "Superior IC", "Project Management", "ElectiveCourse 1", "ElectiveCourse 2"] }
                        }
                    },
                    "2": {
                        name: "Power",
                        next: "term",
                        terms: {
                            "1": { name: "First Term", divisor: 7.5, subjects: ["Power Electronics", "Electrical Machines 2", "High Voltage Engineering", "Renewable Energy Sources", "Automatic Control", "Elective Course 1"] },
                            "2": { name: "Second Term", divisor: 7.5, subjects: ["Power System Analysis", "Power System Planing", "Generation And Economics", "Project Management", "Elective Course 2", "Elective Course 3"] },
                            "3": { name: "Whole Year", divisor: 15, subjects: ["Power Electronics", "Electrical Machines 2", "High Voltage Engineering", "Renewable Energy Sources", "Automatic Control", "Elective Course 1", "Power System Analysis", "Power System Planing", "Generation And Economics", "Project Management", "Elective Course 2", "Elective Course 3"] }
                        }
                    }
                }
            },
            "2": {
                name: "Civil",
                next: "term",
                terms: {
                    "1": { name: "First Term", divisor: 7.5, subjects: ["Construction Analysis 3", "Soil Mechanics", "Hydraulics", "Reinforced Concrete 2", "Metal Structures", "Traffic Engineering"] },
                    "2": { name: "Second Term", divisor: 7.5, subjects: ["Construction Mechanics 3", "Reinforced Concrete 3", "Metal Structures 2", "Soil Mechanics", "Irrigation Works Designs", "Construction Project Management 2"] },
                    "3": { name: "Whole Year", divisor: 15, subjects: ["Construction Analysis 3", "Soil Mechanics", "Hydraulics", "Reinforced Concrete 2", "Metal Structures", "Traffic Engineering", "Construction Mechanics 3", "Reinforced Concrete 3", "Metal Structures 2", "Soil Mechanics", "Irrigation Works Designs", "Construction Project Management 2"] }
                }
            },
            "3": {
                name: "Architecture",
                next: "term",
                terms: {
                    "1": { name: "First Term", divisor: 7.5, subjects: ["Architectural Design 5", "Theories Of Architecture And Design 3", "Steel And Reinforced Concrete Structures", "Urban Planning", "Executive Designs And Building Codes", "Elective Course 4"] },
                    "2": { name: "Second Term", divisor: 7.5, subjects: ["Architectural Design 6", "Theories Of Architecture And Design 4", "Executive Designs And Building Codes 2", "Foundations And Soil", "Residential Area Planning", "Elective Course 5"] },
                    "3": { name: "Whole Year", divisor: 15, subjects: ["Architectural Design 5", "Theories Of Architecture And Design 3", "Steel And Reinforced Concrete Structures", "Urban Planning", "Executive Designs And Building Codes", "Elective Course 4", "Architectural Design 6", "Theories Of Architecture And Design 4", "Executive Designs And Building Codes 2", "Foundations And Soil", "Residential Area Planning", "Elective Course 5"] }
                }
            }
        }
    },
    "4": {
        name: "Level 4",
        next: "department",
        departments: {
            "1": {
                name: "Electric",
                next: "sub_department",
                sub_departments: {
                    "1": {
                        name: "Communication",
                        next: "term",
                        terms: {
                            "1": { name: "First Term", divisor: 7.5, subjects: ["Digital Signal Processing", "Antennas And Wave Propagation", "Professional Ethics", "Project 1", "Elective Course 3", "Elective Course 4"] },
                            "2": { name: "Second Term", divisor: 7.5, subjects: ["Micrometric Systems", "Environmentact Impact Of Projects", "Project 2", "Elective Course 5", "Elective Course 6"] },
                            "3": { name: "Whole Year", divisor: 15, subjects: ["Digital Signal Processing", "Antennas And Wave Propagation", "Professional Ethics", "Project 1", "Elective Course 3", "Elective Course 4", "Micrometric Systems", "Environmentact Impact Of Projects", "Project 2", "Elective Course 5", "Elective Course 6"] }
                        }
                    },
                    "2": {
                        name: "Power",
                        next: "term",
                        terms: {
                            "1": { name: "First Term", divisor: 5.6, subjects: ["Control Of Electrical Power Systems", "Uses Of Electrical Energy", "Power Electronics 2", "Environmentact Impact Of Projects", "Elective Course 4"] },
                            "2": { name: "Second Term", divisor: 6.4, subjects: ["Power System Analysis 2", "High Voltage Engineering 2", "Electrical Drive System", "Electrical Power Systems Protection", "Business Management", "Elective Course 5"] },
                            "3": { name: "Whole Year", divisor: 15, subjects: ["Project", "Control Of Electrical Power Systems", "Uses Of Electrical Energy", "Power Electronics 2", "Environmentact Impact Of Projects", "Elective Course 4", "Power System Analysis 2", "High Voltage Engineering 2", "Electrical Drive System", "Electrical Power Systems Protection", "Business Management", "Elective Course 5"] }
                        }
                    }
                }
            },
            "2": {
                name: "Civil",
                next: "term",
                terms: {
                    "1": { name: "First Term", divisor: 7.5, subjects: ["Environmental Engineering", "Road And Airport Engineering", "Reinforced Concrete 4", "Foundations", "Professional Ethics", "Elective Course 2"] },
                    "2": { name: "Second Term", divisor: 7.5, subjects: ["Irrigation Works Designs 2", "Foundations 2", "Engineering Economics", "Elective Course 3", "Elective Course 4", "Project"] },
                    "3": { name: "Whole Year", divisor: 15, subjects: ["Environmental Engineering", "Road And Airport Engineering", "Reinforced Concrete 4", "Foundations", "Professional Ethics", "Elective Course 2", "Irrigation Works Designs 2", "Foundations 2", "Engineering Economics", "Elective Course 3", "Elective Course 4", "Project"] }
                }
            },
            "3": {
                name: "Architecture",
                next: "term",
                terms: {
                    "1": { name: "First Term", divisor: 7.5, subjects: ["Environmental Impact Of Projects", "Contracts And Specifications", "Elective Course 6", "Elective Course 7", "Project 1"] },
                    "2": { name: "Second Term", divisor: 7.5, subjects: ["Business Management", "Society And Citizenship Issues", "Elective Course 8", "Elective Course 9", "Project 2"] },
                    "3": { name: "Whole Year", divisor: 15, subjects: ["Environmental Impact Of Projects", "Contracts And Specifications", "Elective Course 6", "Elective Course 7", "Project 1", "Business Management", "Society And Citizenship Issues", "Elective Course 8", "Elective Course 9", "Project 2"] }
                }
            }
        }
    }
};


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get all DOM elements
    const levelSelect = document.getElementById('levelSelect');
    const deptSelect = document.getElementById('deptSelect');
    const subDeptSelect = document.getElementById('subDeptSelect');
    const termSelect = document.getElementById('termSelect');

    const deptContainer = document.getElementById('deptContainer');
    const subDeptContainer = document.getElementById('subDeptContainer');
    const termContainer = document.getElementById('termContainer');
    
    const gradesContainer = document.getElementById('gradesContainer');
    const resultDiv = document.getElementById('result');
    const form = document.getElementById('gradeForm');
    const calculateBtn = document.getElementById('calculateBtn');
    
    // New button group and individual buttons
    const actionButtons = document.getElementById('actionButtons');
    const resetBtn = document.getElementById('resetBtn');
    const recalculateBtn = document.getElementById('recalculateBtn');


    // --- Helper Functions ---

    /**
     * Populates a <select> dropdown with options from a data object.
     */
    function populateSelect(selectElement, optionsData, defaultOptionText) {
        selectElement.innerHTML = ''; 
        
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = defaultOptionText;
        selectElement.appendChild(defaultOption);

        for (const key in optionsData) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = optionsData[key].name;
            selectElement.appendChild(option);
        }
    }

    /**
     * Resets and hides all form sections after a certain level.
     */
    function resetSections(level = 'level') {
        gradesContainer.classList.add('hidden');
        gradesContainer.innerHTML = '<h3>أدخل درجاتك:</h3>'; // Reset title too
        resultDiv.classList.add('hidden');
        actionButtons.classList.add('hidden'); // Hide the new button group
        calculateBtn.classList.remove('hidden'); // Show original calculate button

        if (level === 'level') {
            deptContainer.classList.add('hidden');
            subDeptContainer.classList.add('hidden');
            termContainer.classList.add('hidden');
            levelSelect.value = ''; // Reset level select itself
        }
        if (level === 'dept') {
            subDeptContainer.classList.add('hidden');
            termContainer.classList.add('hidden');
        }
        if (level === 'subDept') {
            termContainer.classList.add('hidden');
        }
    }


    /**
     * Generates and displays the input fields for subjects.
     */
    function showGradeInputs(subjects, divisor) {
        gradesContainer.innerHTML = '<h3>أدخل درجاتك:</h3>'; 
        
        subjects.forEach(subject => {
            const gradeItem = document.createElement('div');
            gradeItem.className = 'grade-item';

            const label = document.createElement('label');
            label.htmlFor = `grade-${subject}`;
            label.textContent = `${subject}:`;
            
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `grade-${subject}`;
            input.name = `grade-${subject}`;
            input.placeholder = '0.0';
            input.step = 'any'; // Allow any decimal
            input.min = '0';
            input.required = true;

            gradeItem.appendChild(label);
            gradeItem.appendChild(input);
            gradesContainer.appendChild(gradeItem);
        });

        gradesContainer.dataset.divisor = divisor;
        gradesContainer.classList.remove('hidden');
    }

    /**
     * Determines the grade, message, and color based on the percentage.
     */
    function getGradeDetails(percentage) {
        if (percentage >= 85) {
            return {
                grade: 'ممتاز',
                message: 'عمل مذهل! حافظ على هذا التفوق. 🎉',
                className: 'result-pass' // Green
            };
        } else if (percentage >= 75) {
            return {
                grade: 'جيد جداً',
                message: 'أداء رائع! تهانينا. 🎉',
                className: 'result-pass' // Green
            };
        } else if (percentage >= 65) {
            return {
                grade: 'جيد',
                message: 'نتيجة جيدة! استمر في التقدم. 👍',
                className: 'result-pass' // Green
            };
        } else if (percentage >= 50) {
            return {
                grade: 'مقبول',
                message: 'نجحت! يمكنك تحقيق ما هو أفضل في المرة القادمة. 👍',
                className: 'result-pass' // Green
            };
        } else if (percentage < 50) { // All below 50 are now 'result-fail'
            return {
                grade: 'ضعيف', // Combine for simplicity in message
                message: 'لا تحزن، هذه ليست النهاية تعلم من أخطائك وحاول مجدداً بكل قوة.',
                className: 'result-fail' // Red
            };
        } else { 
             return {
                grade: 'غير معروف',
                message: 'حدث خطأ في حساب التقدير.',
                className: 'result-error'
            };
        }
    }

    /**
     * Centralized function to perform the calculation and display results.
     */
    function performCalculation() {
        const inputs = gradesContainer.querySelectorAll('input[type="number"]');
        const divisor = parseFloat(gradesContainer.dataset.divisor);
        let total = 0;
        let error = false;

        inputs.forEach(input => {
            const value = parseFloat(input.value);
            if (isNaN(value) || value < 0) { // Assuming grades cannot be negative
                input.style.borderColor = '#dc3545'; // Red border for error
                error = true;
            } else {
                input.style.borderColor = '#D4AF37'; // Gold border for valid input
                total += value;
            }
        });

        if (error) {
            // This is for *invalid* input (like text or negative)
            resultDiv.innerHTML = 'خطأ: يرجى إدخال جميع الدرجات كأرقام صحيحة وغير سالبة.';
            resultDiv.className = 'result-error';
            actionButtons.classList.add('hidden'); // Keep action buttons hidden on error
            calculateBtn.classList.remove('hidden'); // Allow user to try calculating again
        } else {
            const finalPercentage = total / divisor;

            // 2. التحقق إذا كانت النسبة أكبر من 100
            if (finalPercentage > 100) {
                // 3. عرض رسالة خطأ مخصصة
                resultDiv.innerHTML = `
                    خطأ: النتيجة (${finalPercentage}%) أكبر من 100%. 
                    <p>يرجى مراجعة الدرجات التي أدخلتها والتأكد من أنها صحيحة.</p>
                `;
                resultDiv.className = 'result-error'; // استخدام تنسيق الخطأ الأحمر
                
                // إظهار الأزرار للسماح بإعادة الحساب
                calculateBtn.classList.add('hidden'); 
                actionButtons.classList.remove('hidden'); 
            
            } else {
                // 4. إذا كانت النتيجة سليمة (أقل من أو تساوي 100)
                const details = getGradeDetails(finalPercentage); // استخدام النسبة الصحيحة

                resultDiv.innerHTML = `
                    مجموع درجاتك = ${finalPercentage}% 
                    <h3>التقدير: ${details.grade}</h3>
                    <p>${details.message}</p>
                `;
                resultDiv.className = details.className; // تطبيق اللون الأخضر أو الأحمر
                
                calculateBtn.classList.add('hidden'); 
                actionButtons.classList.remove('hidden'); 
            }
        }
        
        resultDiv.classList.remove('hidden');
    }

    // --- Event Listeners ---

    // 1. Populate initial Level dropdown
    populateSelect(levelSelect, gradeData, '-- اختر المستوى --');

    // 2. Handle Level selection
    levelSelect.addEventListener('change', () => {
        resetSections('dept'); 
        const levelKey = levelSelect.value;
        if (!levelKey) return; 

        const levelData = gradeData[levelKey];

        if (levelData.next === 'department') {
            populateSelect(deptSelect, levelData.departments, '-- اختر القسم --');
            deptContainer.classList.remove('hidden');
        } else if (levelData.next === 'term') {
            populateSelect(termSelect, levelData.terms, '-- اختر الفصل الدراسي --');
            termContainer.classList.remove('hidden');
        }
    });

    // 3. Handle Department selection
    deptSelect.addEventListener('change', () => {
        resetSections('subDept'); // Reset sections after this one
        const levelKey = levelSelect.value;
        const deptKey = deptSelect.value;
        if (!deptKey) return;

        const deptData = gradeData[levelKey].departments[deptKey];

        if (deptData.next === 'sub_department') {
            populateSelect(subDeptSelect, deptData.sub_departments, '-- اختر التخصص --');
            subDeptContainer.classList.remove('hidden');
        } else if (deptData.next === 'term') {
            populateSelect(termSelect, deptData.terms, '-- اختر الفصل الدراسي --');
            termContainer.classList.remove('hidden');
        }
    });

    // 4. Handle Sub-Department selection
    subDeptSelect.addEventListener('change', () => {
        resetSections('term'); // Reset sections after this one
        const levelKey = levelSelect.value;
        const deptKey = deptSelect.value;
        const subDeptKey = subDeptSelect.value;
        if (!subDeptKey) return;

        const subDeptData = gradeData[levelKey].departments[deptKey].sub_departments[subDeptKey];

        if (subDeptData.next === 'term') {
            populateSelect(termSelect, subDeptData.terms, '-- اختر الفصل الدراسي --');
            termContainer.classList.remove('hidden');
        }
    });

    // 5. Handle Term selection
    termSelect.addEventListener('change', () => {
        gradesContainer.classList.add('hidden');
        gradesContainer.innerHTML = '<h3>أدخل الدرجات:</h3>';
        resultDiv.classList.add('hidden');
        actionButtons.classList.add('hidden'); 
        calculateBtn.classList.remove('hidden'); 
        
        const termKey = termSelect.value;
        if (!termKey) return;

        let currentData = gradeData[levelSelect.value];
        if (currentData.next === 'department') {
            currentData = currentData.departments[deptSelect.value];
        }
        if (currentData && currentData.next === 'sub_department') {
            currentData = currentData.sub_departments[subDeptSelect.value];
        }

        const termData = currentData.terms[termKey];
        showGradeInputs(termData.subjects, termData.divisor);
    });

    // 6. Handle Form Submission (initial calculation)
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        performCalculation();
    });

    // 7. Handle Reset Button Click ("حساب درجة أخرى")
    resetBtn.addEventListener('click', () => {
        form.reset(); 
        resetSections('level'); 
        
        resultDiv.classList.add('hidden');
        resultDiv.innerHTML = ''; 
        
        calculateBtn.classList.remove('hidden');
        actionButtons.classList.add('hidden');
    });

    // 8. Handle Recalculate Button Click ("إعادة حساب الدرجة")
    recalculateBtn.addEventListener('click', () => {
        performCalculation();
    });

});