
const ResearchPapers = () => {
    return (
        <div>
            <div className="mx-auto mb-[90px] max-w-[510px] text-center lg:mb-20">
                <h1 id='article' className="text-3xl font-bold text-blue">Research Case Studies</h1>
            </div>

            <section className="">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                        <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Impact: Finding solutions to feed the world whilst caring for the planet</h3>
                            <span className="text-xs ">February 19, 2021</span>
                            <p>Winner: Research and Impact Awards 2021</p>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Impact: Finding solutions to feed the world whilst caring for the planet</h3>
                                <span className="text-xs ">February 19, 2021</span>
                                <p>Winner: Research and Impact Awards 2021</p>
                            </div>
                        </div>
                        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Impact: Finding solutions to feed the world whilst caring for the planet</h3>
                                <span className="text-xs ">February 19, 2021</span>
                                <p>Winner: Research and Impact Awards 2021</p>
                            </div>
                        </div>
                        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Impact: Finding solutions to feed the world whilst caring for the planet</h3>
                                <span className="text-xs ">February 19, 2021</span>
                                <p>Winner: Research and Impact Awards 2021</p>
                            </div>
                        </div>
                        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Impact: Finding solutions to feed the world whilst caring for the planet</h3>
                                <span className="text-xs ">February 19, 2021</span>
                                <p>Winner: Research and Impact Awards 2021</p>
                            </div>
                        </div>
                        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Impact: Finding solutions to feed the world whilst caring for the planet</h3>
                                <span className="text-xs ">February 19, 2021</span>
                                <p>Winner: Research and Impact Awards 2021</p>
                            </div>
                        </div>
                        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?6" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Impact: Finding solutions to feed the world whilst caring for the planet</h3>
                                <span className="text-xs ">February 19, 2021</span>
                                <p>Winner: Research and Impact Awards 2021</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default ResearchPapers;