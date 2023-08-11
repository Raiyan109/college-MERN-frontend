import './Gallery.css'
import groupStudents1 from '../assets/college-group1.jpg'
import groupStudents2 from '../assets/college-group2.jpg'
import groupStudents3 from '../assets/college-group3.jpg'
import groupStudents4 from '../assets/college-group4.jpg'
import groupStudents5 from '../assets/college-group5.jpg'
import groupStudents6 from '../assets/college-group6.jpg'

const Gallary = () => {
    return (
        <div className='mb-16'>
            <div className="text-center max-w-xl mx-auto">
                <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Colleges<br />Image Gallery</h1>
                <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
            </div>
            <div className="gridywrap">
                <div className="gridy-2 gridyhe-1">
                    <div className="gridimg" style={{ backgroundImage: `url(${groupStudents1})` }} >&nbsp;</div>

                    <div className="gridinfo">
                        <h3>BF Shaheen</h3>
                        {/* <div className="gridmeta">
                            <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
                            <p className="gridwho"><i className="fa fa-user"></i> Bruce Wayne</p>
                        </div>
                        <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
                        <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus"></i></a> */}
                    </div>
                </div>
                <div className="gridy-1 gridyhe-1">
                    <div className="gridimg" style={{ backgroundImage: `url(${groupStudents2})` }} >&nbsp;</div>

                    <div className="gridinfo">
                        <h3>Uttara Rajuk College</h3>
                        {/* <div className="gridmeta">
                            <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
                            <p className="gridwho"><i className="fa fa-user"></i> Harvey Dent</p>
                        </div>
                        <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
                        <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus"></i></a> */}
                    </div>
                </div>
                <div className="gridy-1 gridyhe-2">
                    <div className="gridimg" style={{ backgroundImage: `url(${groupStudents3})` }} >&nbsp;</div>

                    <div className="gridinfo">
                        <h3>Dhaka City College</h3>
                        {/* <div className="gridmeta">
                            <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
                            <p className="gridwho"><i className="fa fa-user"></i> Clark Kent</p>
                        </div>
                        <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
                        <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus"></i></a> */}
                    </div>
                </div>
                <div className="gridy-2 gridyhe-1">
                    <div className="gridimg" style={{ backgroundImage: `url(${groupStudents4})` }} >&nbsp;</div>

                    <div className="gridinfo">
                        <h3>Vikarunnisa Noon</h3>
                        {/* <div className="gridmeta">
                            <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
                            <p className="gridwho"><i className="fa fa-user"></i> Tony Stark</p>
                        </div>
                        <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
                        <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus"></i></a> */}
                    </div>
                </div>
                <div className="gridy-1 gridyhe-1">
                    <div className="gridimg" style={{ backgroundImage: `url(${groupStudents5})` }} >&nbsp;</div>
                    <div className="gridinfo">
                        <h3>Adamjee College</h3>
                        {/* <div className="gridmeta">
                            <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
                            <p className="gridwho"><i className="fa fa-user"></i> Steve Rogers</p>
                        </div>
                        <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
                        <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus"></i></a> */}
                    </div>
                </div>
                <div className="gridy-1 gridyhe-1">
                    <div className="gridimg" style={{ backgroundImage: `url(${groupStudents6})` }} >&nbsp;</div>

                    <div className="gridinfo">
                        <h3>Notre Dame College</h3>
                        {/* <div className="gridmeta">
                            <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p>
                            <p className="gridwho"><i className="fa fa-user"></i> Natasha Romanoff</p>
                        </div>
                        <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p>
                        <a href="#" className="grid-btn grid-more"><span>More</span> <i className="fa fa-plus"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;