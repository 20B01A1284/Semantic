import Faker from "faker";
import "./styles.css";
function Comment() {
  return (
    <div className="ui cards">
      <div className="ui card">
        <div className="Details">
          <img className="ui image" src={Faker.image.people()} />
          <div className="ui header">Elliot Fu</div>
          <h3 className="meta">Friends of Veronika</h3>
          <div className="description">
            <p>Elliot requested permission to view your contact details</p>
          </div>
        </div>
        <div className="extra content">
          <div class="ui buttons">
            <button class="ui green basic button">Approve</button>
            <button class="ui red basic button">Decline</button>
          </div>
        </div>
      </div>
      <div className="ui card">
        <div className="Details">
          <img className="ui image" src={Faker.image.people()} />
          <div className="ui header">Jenny Hess</div>
          <h3 className="meta">New Member</h3>
          <div className="description">
            <p>Jenny wants to add you to the group <b>best friends</b></p>
          </div>
        </div>
        <div className="extra content">
          <div class="ui buttons">
            <button class="ui green basic button">Approve</button>
            <button class="ui red basic button">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Comment };
