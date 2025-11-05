import { lazy, Suspense, useState } from "react";


const Greet = lazy(() => import("./components/Greet"));

const App = () => {

    const [name, setName] = useState("");

    // Task 1

    // React.lazy() is used to prevent all components that are not needed at a particular time 
    // from being downloaded and taking up unnecessary time and resources. React.lazy() is used to 
    // perform the so-called lazy loading of 
    // components to make the website faster and more optimized.

    // The Suspense component is used so that when all kinds of files are downloaded on our site, 
    // even after a certain action, there is no loading screen and loading animations are
    //  displayed so that users are more comfortable and enjoy themselves.


    // Task 2

    const handleName = (e) => {

        e.preventDefault();

        const { userName } = e.target

        setName(userName.value);
        e.target.reset();

    }

    return (
        <>
            <form onSubmit={handleName}>
                <input type="text" name="userName" placeholder="Enter your name" /> <br /><br />
                <button>See your name length</button>

                <Suspense fallback={<p>Loading...</p>}>
                    <Greet length={name.length} />
                </Suspense>

            </form>
        </>
    );



}

export default App
