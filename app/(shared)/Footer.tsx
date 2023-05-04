import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
            <div className="justify-between mx-auto gap-16 sm:flex">
                {/* First Column */}
                <div className="mt-16 basis-1/2 sm:mt-0">
                    <h4 className="font-bold">AI blog of the future</h4>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ducimus ab natus et doloribus esse explicabo tenetur suscipit, omnis placeat perspiciatis quisquam consectetur officia voluptates eveniet quis consequatur, ex quasi?
                    </p>
                </div>
                {/* Second Column  */}
                <div className="mt-16 basis-1/4 sm:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">explicabo tenetur suscipit</p>
                    <p className="my-5">a, ducimus ab</p>
                    <p>natus et</p>
                </div>
                {/* Third Column  */}
                <div className="mt-16 basis-1/4 sm:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">explicabo tenetur suscipit</p>
                    <p>(+1043985673)</p>
                    <p>natus et</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer