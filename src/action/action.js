/* viết một hàm tạo ra các action */
export const action = (type,payload)=>{
    return {
        type:type,
        payload:payload
    }

}