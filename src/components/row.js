import React  from 'react'
import "../styles/row.css"
import Green from './subcomponents/green';
import Yellow from './subcomponents/Yellow';
import Red from './subcomponents/Red';




function Row(props) {
    const{name,purpose} = props

    return (
      <>
        <tr>
          <th>
            <div class="dropdown">
              <div className="button1">
                <Green/>
              </div>
            </div>
          </th>
          <th>
            <div class="dropdown">
              <div className="button2">
               <Yellow/>
              </div>
            </div>
          </th>
          <th>
            <div class="dropdown">
              <div className="button3">
               <Red/>
              </div>
            </div>
          </th>
          <th>
            <section className="text">{name}</section>
          </th>
          <th>
            <div class="dropleft dropdown">
              <button class="dropbtn">{purpose}</button>
            </div>
          </th>
        </tr>
      </>
    );
}

export default Row
