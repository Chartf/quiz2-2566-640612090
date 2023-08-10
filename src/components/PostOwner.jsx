export const PostOwner = (props) => {
  return <div>
    <span className="fw-semibold fs-5">{props.Name}</span>
    <span className="fw-semibold fs-5">{props.Number}</span>
    <span >{props.post}</span>
  </div>;
};



/*<div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/profileImages/1.jpg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <PostOwner Name = "Thanarat monkumdee " Number = "640612090"></PostOwner>
          </div>

          <PostOwner post = "Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"></PostOwner>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">100 คน</span>
          </div>
          <hr className="m-0 border" />
        </div>*/