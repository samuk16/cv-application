function deleteItem(value, setValue, index, setIndex) {
    if (index !== 0) {
        setIndex(index - 1)

    }
    const valueCopy = [...value];
    valueCopy.splice(index, 1)
    setValue(valueCopy)

}

export { deleteItem }