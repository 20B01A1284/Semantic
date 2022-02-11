import Faker from "faker";
function Comment(props) {
  return (
    <>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src={Faker.image.people()}/>
      <div class="header">
        {props.name}
      </div>
      <div class="meta">
       {props.sub}
      </div>
      <div class="description">
        {props.des}
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  
    </>
  );
}
export { Comment };
