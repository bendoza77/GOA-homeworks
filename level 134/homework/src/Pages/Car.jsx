import { GetLocalStorage, SetLocalStorage } from "../utils/LocalStorages";
import { useForm } from "../hooks/useForm";

const Car = ({handleCar}) => {

    const handleSubmit = useForm();

    return (
        <>
            <main className="car_main">
                <img src={GetLocalStorage("car").image} alt="" />

                <div className="right_side">
                    <form onSubmit={(e) => handleSubmit(e, handleCar)}>
                        <label htmlFor="userName">Enter your name</label><br />
                        <input type="text" name="userName" id="userName" required/><br /><br />
                        <label htmlFor="userEmail">Enter your email</label><br />
                        <input type="email" name="userEmail" id="userEmail" required/><br /><br />
                        <label htmlFor="userPassword">Enter your password</label><br />
                        <input type="password" name="userPassword" id="userPassword" required/><br />
                        <button>Submit</button>
                    </form>
                </div>
            </main>
        </>
    );


}

export default Car