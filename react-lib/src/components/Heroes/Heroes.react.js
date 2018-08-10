import React from 'react'

function Heroes({ char, searchTerm, searchTermChanged }) {
    return (
        <section>
            <div id="header">
                <h1>DC Superheroes</h1>
                <h3>A List of Major DC Superheroes</h3>
            </div>
            <form>
                <div className="search">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={e => searchTermChanged(e.target.value)}
                        />
                </div>
            </form>
            <table>
                <thead>
                    <tr style={{textAlign: 'center'}}>
                        <th>Name</th>
                        <th>Alter Ego</th>
                        <th>First Appearance</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {char.map(curChar => (
                        <tr key={curChar.name}>
                            <td>{curChar.name}</td>
                            <td>{curChar.alter_ego}</td>
                            <td>{curChar.first_appearance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Heroes
