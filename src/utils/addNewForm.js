const mockup = {
    education: { degree: '', university: '', from: '', to: '' },
    work: { title: '', company: '', from: '', to: '', description: '' },
    skill: { id: crypto.randomUUID(), skillName: '' }
}
function addNewForm(value, setValue, variant) {
    let infoVar;
    switch (variant) {
        case 'education':
            infoVar = { ...mockup.education }
            setValue([...value, infoVar]);
            break;
        case 'work':
            infoVar = { ...mockup.work }
            setValue([...value, infoVar]);
            break;
        case 'skill':
            setValue([...value, { id: crypto.randomUUID(), skillName: '' }]);
            break;
        default:
            break;
    }
}

export { addNewForm }