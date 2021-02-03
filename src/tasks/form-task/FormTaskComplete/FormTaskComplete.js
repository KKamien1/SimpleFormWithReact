import React from 'react';

export const FormTaskComplete = () => {
    return (
        <>
            <form>
                <fieldset >
                    <legend>Personal Info</legend>
                    <label>First Name: <input type='text' required /></label>
                    <label>Last Name: <input type='text' required /></label>
                    <label>Birthday: <input type='date' /></label>
                </fieldset>

                <fieldset >
                    <legend>User Management</legend>
                    <label>User Type: <input type='text' /></label>
                    <label>User Inactivity Date: <input type='date' /></label>
                </fieldset>
                <button>Save</button>
            </form>
        </>
    );
};
