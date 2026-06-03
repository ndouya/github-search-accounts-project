export default function contact(){
    return(
        <div>
        <h className='text-3xl font-bold text-gray-300'>Contact Us</h>
        <p className="text-3xl mb-4">Email: roarkube@gmail.com</p>
        <form className=''>
            <div>
                <label className="">Name:</label>
                <input type="text" className=""></input>

            </div>
            <div>
                <label className="block mb-2"></label>
                <textarea className="border p-2"></textarea>
            </div>
        </form>
        </div>
    )
}