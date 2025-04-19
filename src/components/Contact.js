
export const Contact = ()=>{
    return (
        <div className=" text-center mt-10 mx auto ">
            <h1 className="text-3xl font-bold text-center mt-10">
                contact Us
            </h1>
            <p> 
                This is Grub express, a food delivery app.
                <br></br>
            </p>

            <form>
                <input type="text" placeholder="name" className=" border border-black p-2 m-2"></input>
                <input type="text" placeholder="message" className="border border-black p-2 m-2"></input>
                <button className="bg-lime-700 text-white p-2 m-2 ">Enter</button>
            </form>
        </div>
    )
}