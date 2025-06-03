import Parent from "./components/Parent.jsx"

function App() {

    // Task 2

    // Modularity is a way that consists of import and export keywords and with these keywords we can 
    // export or take a specific function out of a file and import this function into another file, this modularity 
    // helps us to export and import function variables and everything that we want. For example, in React, modularity 
    // helps us to export React components that we have created in different files so that the same function can be 
    // exported out of the file and then imported into the main file to build the site according to the React components, 
    // and modularity helps us in this with the help of import and export keywords.


    // Task 3

    // The key attribute is an attribute that we use when creating a list. We use it because when creating a list in React, 
    // React perceives the elements of this list as a single whole list, that is, it does not consider them as separate elements. 
    // The key attribute helps us make all the elements of the list unique, so that React perceives all the 
    // elements as different, that each element is different.
    
    // Task 4 - Task 5

    // map

        // 1
        let arr = [0,1,2,3,4,5,6,7,8,9];
        let result = arr.filter((el) => el >= 5)
        let finaly = result.map((el, i) => (
            <li key={`Eelement ${i}`}>{el}</li>
        ))

        // 2
        let secondArr = ["gabriel", "luka", "nika", "giorgi", "sandor", "andria"]
        let secondResult = secondArr.filter((el) => el.length >= 5).map((el, i) => (
            <li key={`Name ${i}`}>{el}</li>
        ))

        return (
            <>
                <ul>
                    <Parent />
                    {finaly}
                </ul>

                <ol>
                    {secondResult}
                </ol>
            </>
        );
    
}

export default App
