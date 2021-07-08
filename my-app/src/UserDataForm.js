import { useState, useEffect} from "react";


function UserDataForm(props){ 

    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        setUserData({
            fullName: "Jason Smith"
        });
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('The Form Was Submitted: ' + JSON.stringify(userData));
    }

    const handleChange = (e) =>{
        let target = e.target;
        let value = target.value;
        let name = target.name;

        setUserData(userData => {
            return {...userData, [name]:value};
        });
    }

    if (!userData) {
        return null; // render nothing until the form data is loaded
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                <input type="text" name="fullName" value={userData.fullName} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }


}

export default UserDataForm;