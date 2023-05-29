import React from 'react'
import Card from 'app/(shared)/Card'

type Props = {}

const Tech = (props: Props) => {
    return (
        <section>
            <hr className="border-1" />
            {/* Header */}
            <div className="flex items-center gap-3 my-8">
                <h4 className=" bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
                    HOT
                </h4>
                <p className="font-bold text-2xl">Latest Tech News</p>
            </div>
            {/* Flex */}
            {/* <div className="flex justify-between items-center gap-5">
                <div className="bg-wh-500 h-96 basis-1/2"></div>
                <div className="flex flex-col gap-3 h-96 basis-1/2">
                    <div className="bg-wh-500 basis-1/3"></div>
                    <div className="bg-wh-500 basis-1/3"></div>
                    <div className="bg-wh-500 basis-1/3"></div>
                </div>
            </div> */}
            <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
                {/* Big Card */}
                <Card className="bg-wh-500 col-span-1 row-span-3"
                    imageHeight="h-96"
                    isLongForm
                />
                {/* Small Cards */}
                <Card className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
                    imageHeight="h-48"
                    isSmallCard
                />
                <Card className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
                    imageHeight="h-48"
                    isSmallCard
                />
                <Card className="bg-wh-500 col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
                    imageHeight="h-48"
                    isSmallCard
                />
            </div>
        </section>
    )
}

export default Tech