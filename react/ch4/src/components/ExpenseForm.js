import './ExpenseForm.css'

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
    return(
     <form onSubmit={handleSubmit}>
        <div className="form-center">
            <div className="form-group">
                <label htmlFor="charge">상품</label>
                <input
                    type="text"
                    className="form-control"
                    id="charge"
                    name="charge"
                    placeholder="예) 콜라"
                    value={charge}
                    onChange={(e)=>{handleCharge(e.target.value)}}
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">비용</label>
                <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="amount"
                    placeholder="예) 100"
                    value={amount}
                    onChange={(e)=>{handleAmount(e.target.value)}}
                />
            </div>
            <button 
                type="submit" 
                className="btn"
            >{edit? "수정" : "제출"}</button>
        </div>
     </form>
    )
}

export default ExpenseForm;