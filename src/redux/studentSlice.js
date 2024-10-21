// import { createSlice } from "@reduxjs/toolkit";
// import { data } from "../components/data";

// const studentSlice = createSlice({
//     name: 'students',
//     initialState: data,
//     reducers: {
//         addUser: (state, action) => {
//             console.log(action)
//             state.push(action.payload)
//         },
//         editUser: (state, action) => {
//             const { id, name, dept, age } = action.payload
//             const std = state.find(student => student.id == id)
//             if (std) {
//                 std.name = name
//                 std.dept = dept
//                 std.age = age
//             }
//             else {

//             }
//         },
//         deleteUser: (state, action) => {
//             const { id } = action.payload
//             return state.filter(student => student.id !== id)
//         }
//     }
// })


// export default studentSlice.reducer
// export const { addUser, editUser, deleteUser } = studentSlice.actions




import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/data"


const studentSlice = createSlice({
    name: "students",
    initialState: data,
    reducers: {

        addStudent: (state, action) => {
            console.log(action)
            state.push(action.payload)
        },

        editStudent: (state, action) => {
            const { id, name, dept, age } = action.payload
            const std = state.find(student => student.id == id)
            if (std) {
                // std.id = id;
                std.name = name;
                std.dept = dept;
                std.age = age
            }
            else {

            }
        },

        deleteStudent: (state, action) => {
            const { id } = action.payload
            return state.filter(student => student.id !== id)

        }
    }
})


export default studentSlice.reducer;
export const { addStudent, editStudent, deleteStudent } = studentSlice.actions