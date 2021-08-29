<template>
   <div class="row">
       <div class="col-md-8 registerseller">
            <h3>Register And Start Selling</h3>
            <p>Please have the following ready </p>
            <p>• Your bank account details for receiving payrnents torn Amazon</p>
            <p>• Tax (GST1PAN) details of your business </p>
            <p>Please ensure that all the infor</p>
            <h5>Enter details below to continue registration</h5>
            <form>
                <label for="companyname">Company/ Business Name</label>
                <input type="text" v-model="companyname" />
                <p>Enter the company/ business as registered in GST/PAN</p>
                <label>Seller Agreement</label>
                <p>
                    <input type="checkbox" v-model="confirmcompany" />
                    I have read and agree to comply with and/or be bound by the terms and conditions of Amazon Services Business Solutions Agreement, Easy Ship
services Runway Terms and Conditions and Amazon Business (112B)Terms & Conditions  
                </p>
                <p><input type="submit" value="continue"/></p>
                <p>create an account? <a href="#">click here</a></p>
            </form>
       </div>
       <div class="col-md-4">
           <img src="../../assets/images/sellerbanner.png" />
       </div>
   </div>
</template>

<script>
export default {
    
}
</script>