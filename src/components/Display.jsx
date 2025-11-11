function Display(){
    return (<form action="post">
        <label htmlFor="">Full Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Phone Number</label>
        <input type="tel" />
        <label htmlFor="">Address</label>
        <input type="text" />
    </form>)
}

export default Display;