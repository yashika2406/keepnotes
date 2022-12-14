import "./section.css";

export const SideNav = ({ notesOrTrash, setNotesOrTrash }) => {
  return (
    <div class="side-nav">
      <div class="side-nav__titles">
        <div
          onClick={() => setNotesOrTrash("notes")}
          class="titles__notes title"
        >
          <svg
            class="svg"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              // style={{mix-blend-mode:"normal"}}
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#595959">
                <path d="M143.33333,14.33333h-114.595c-7.912,0 -14.32617,6.41417 -14.33333,14.32617l-0.0645,120.34983c0,3.19633 3.85567,4.7945 6.12033,2.537l22.53917,-22.54633h100.33333c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-86c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM121.83333,64.5h-43c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667c0,-3.956 3.21067,-7.16667 7.16667,-7.16667h43c3.956,0 7.16667,3.21067 7.16667,7.16667c0,3.956 -3.21067,7.16667 -7.16667,7.16667zM129,86c0,3.956 -3.21067,7.16667 -7.16667,7.16667h-43c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667c0,-3.956 3.21067,-7.16667 7.16667,-7.16667h43c3.956,0 7.16667,3.21067 7.16667,7.16667zM53.75,64.5h-7.16667c-1.978,0 -3.58333,-1.60533 -3.58333,-3.58333v-7.16667c0,-1.978 1.60533,-3.58333 3.58333,-3.58333h7.16667c1.978,0 3.58333,1.60533 3.58333,3.58333v7.16667c0,1.978 -1.60533,3.58333 -3.58333,3.58333zM57.33333,82.41667v7.16667c0,1.978 -1.60533,3.58333 -3.58333,3.58333h-7.16667c-1.978,0 -3.58333,-1.60533 -3.58333,-3.58333v-7.16667c0,-1.978 1.60533,-3.58333 3.58333,-3.58333h7.16667c1.978,0 3.58333,1.60533 3.58333,3.58333z"></path>
              </g>
            </g>
          </svg>
          <h3 class="title-heading">Notes</h3>
        </div>
        <div
          onClick={() => setNotesOrTrash("trash")}
          class="titles__trash title"
        >
          <svg
            class="svg"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="26"
            height="26"
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              // style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#595959">
                <path d="M72.76923,-0.20673c-5.53004,0 -10.95673,1.08534 -14.88462,4.96154c-3.92788,3.87621 -5.16827,9.38041 -5.16827,15.09135h-26.25481c-3.64363,0 -6.61538,2.97176 -6.61538,6.61538h-6.61538v13.23077h145.53846v-13.23077h-6.61538c0,-3.64363 -2.97176,-6.61538 -6.61538,-6.61538h-26.25481c0,-5.71094 -1.24038,-11.21514 -5.16827,-15.09135c-3.92788,-3.8762 -9.35456,-4.96154 -14.88462,-4.96154zM72.76923,13.4375h26.46154c3.61779,0 4.75481,0.85276 5.16827,1.24038c0.41346,0.38762 1.24038,1.47296 1.24038,5.16827h-39.27885c0,-3.69531 0.82692,-4.78065 1.24038,-5.16827c0.41346,-0.38762 1.55048,-1.24038 5.16827,-1.24038zM26.46154,46.30769v105.84615c0,10.93089 8.91526,19.84615 19.84615,19.84615h79.38462c10.93089,0 19.84615,-8.91526 19.84615,-19.84615v-105.84615zM52.92308,66.15385h13.23077v79.38462h-13.23077zM79.38462,66.15385h13.23077v79.38462h-13.23077zM105.84615,66.15385h13.23077v79.38462h-13.23077z"></path>
              </g>
            </g>
          </svg>
          <h3 class="title-heading">Trash</h3>
        </div>
      </div>
    </div>
  );
};
