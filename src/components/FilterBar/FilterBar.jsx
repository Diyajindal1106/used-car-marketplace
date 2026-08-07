import "./FilterBar.css";

function FilterBar({

    category,
    setCategory,

    fuel,
    setFuel,

    price,
    setPrice,

    sort,
    setSort

}) {

    return (

        <div className="filter-bar">

            <select
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
            >

                <option>All Categories</option>
                <option>Hatchback</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>MPV</option>

            </select>

            <select
                value={fuel}
                onChange={(e)=>setFuel(e.target.value)}
            >

                <option>All Fuel</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>CNG</option>
                <option>Electric</option>

            </select>

            <select
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
            >

                <option>All Prices</option>
                <option>Below 5L</option>
                <option>5L-10L</option>
                <option>Above 10L</option>

            </select>

            <select
                value={sort}
                onChange={(e)=>setSort(e.target.value)}
            >

                <option>Default</option>
                <option>Low to High</option>
                <option>High to Low</option>

            </select>

        </div>

    );

}

export default FilterBar;