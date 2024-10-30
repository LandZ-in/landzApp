import React from 'react'

const LandTagSearch = ({ title, options, input, setInput, selected, setSelected, placeholder }) => {

    const handleTagInputChange = (e, setInput) => {
        setInput(e.target.value);
    };

    //     const handleInputChange = (e, setInput) => {
    //     setInput(e.target.value);
    //   };

    const handleTagSelect = (tag, options, selected, setSelected, setInput) => {
        if (!selected.includes(tag)) {
            setSelected([...selected, tag]);
        }
        setInput('');
    };

    const handleTagRemove = (tag, selected, setSelected) => {
        setSelected(selected.filter(t => t !== tag));
    };

    const getFilteredOptions = (options, input, selected) => {
        return options.filter(
            option =>
                option.toLowerCase().includes(input.toLowerCase()) &&
                !selected.includes(option)
        );
    };
    
    return (
        <div className="tag-search">
            <h2 className="search-title">{title}</h2>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => handleTagInputChange(e, setInput)}
                />
                {input && (
                    <ul className="options-list">
                        {getFilteredOptions(options, input, selected).map((option) => (
                            <li
                                key={option}
                                className="option-item"
                                onClick={() => handleTagSelect(option, options, selected, setSelected, setInput)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="selected-tags">
                {selected.map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                        <button
                            type="button"
                            className="tag-remove"
                            onClick={() => handleTagRemove(tag, selected, setSelected)}
                        >
                            X
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default LandTagSearch