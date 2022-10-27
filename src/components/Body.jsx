import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Body() {
 
  return (
    <div>
        <main class="container my-3" role="main">
        <div class="row justify-content-center">
            <div class="col-md-8">
            <p>
                <img
                class="img-thumbnail rounded mx-auto d-block"
                src="https://github.com/may-py/may-py.github.io/blob/main/ABCC%20Code.png?raw=true"
                alt=""
                height="300"
                width="400"
                />
            </p>
            
            <a
                class="btn btn-primary " 
                href="https://www.youtube.com/channel/UCbFpiitUZRMgS_xp2fJa0tQ?sub_confirmation=1"
            >
                Click & Subscribe!
            </a>
            <div><FontAwesomeIcon icon="fa-light fa-thumbs-up" /></div>
            <hr />

            <ul>
                <h3 class="text-light text-center bg-dark">
                Please watch tutorials on the below topic.
                </h3>
                <li>
                Python
                <a
                    href="https://www.youtube.com/playlist?list=PLpS9MBO_H5nRb5e017a7LXiQyKSOFVeQ9"
                    >YouTube Playlist</a
                >
                </li>
                <li>Microsoft Excel</li>
                <li>Data cleaning, Data Manipulation, Data Visualization</li>
                <li>Django (a python based web framework)</li>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>PowerBI</li>
            </ul>
            </div>
        </div>
        </main>
    </div>
  )
}

export default Body