import React from 'react';

class CategoryFilter extends React.Component {

    render() {
        const { categories, selected, onCategoryClick } = this.props;
        const renderCategories = categories.map(c => {
            return (
                <button
                    key={c}
                    className={ selected === c ? 'selected' : '' }
                    onClick={e => onCategoryClick(e.target.innerText)}
                >
                    {c}
                </button>
            );
        });
        return (
            <div className="categories">
                <h5>Category Filters</h5>
                {renderCategories}
            </div>
        );
    }
}

export default CategoryFilter;