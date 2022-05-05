import getData from "../utils/getData";


const Funnels = async() => {
    await getData('funnels')
    return `
    <h1>Get Mixpanel Data for a Funnel ID</h1>
    <div>
      <label for="query_id" class="form-label">Funnel ID</label>
      <input type="text" class="form-control" id="query_id" />
      <div id="errorMsg" class="text-danger"></div>
    </div>
    <div>
    <h3>Select a date range</h3>
      <div class="card show">
        <div class="card-50">
          <label for="initial_date">Start date</label>
          <input
            type="date"
            class="form-control"
            placeholder="YYYY-MM-DD"
            id="initial_date"
            aria-label="YYYY-MM-DD"/>
        </div>
        <div class="card-50">
          <label for="final_date">End Date - Optional</label>
          <input
            type="date"
            class="form-control"
            placeholder="YYYY-MM-DD"
            id="final_date"
            aria-label="YYYY-MM-DD"
          />
        </div>
      </div>
    </div>
    `
}

export default Funnels