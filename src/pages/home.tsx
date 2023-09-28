import Layout from "@components/layout/";
import "./styles/home.css";

export default function HomePage() {
  return (
    <Layout>
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row mx-auto gap-3">
          <div className="col-md-3 col-6 info_card rounded border">
            <div className="colo" style={{}}></div>
            <div className="tex">Join chat</div>
          </div>

          <div className="col-md-3 col-6 info_card rounded border">
            <div className="colo" style={{}}></div>
            <div className="tex">Create new chat room</div>
          </div>
          <div className="col-md-3 col-6 info_card rounded border">
            <div className="colo" style={{}}></div>
            <div className="tex">All chat rooms</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
