function setValueFormatted(e, value, formName, name, setValue, index) {
    if (formName == 'info' || formName == 'contact') {
        const valueData = { ...value };
        valueData[name] = e.currentTarget.value
        setValue(valueData)
    } else {
        const arrayValueData = [...value];
        if (formName === 'skill') {
            arrayValueData[index].skillName = e.currentTarget.value
        } else {
            arrayValueData[index][name] = e.currentTarget.value
        }
        setValue(arrayValueData)

    }

}

export { setValueFormatted }