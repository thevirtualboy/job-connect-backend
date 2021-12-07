class JobsController < ApplicationController

    def index
        jobs = Job.all
        render json: jobs
    end

    
    def show
        job = Job.find(params[:id])
        render json: job, include: [:poster, :taker]
    end 

    def create
        job = Job.create(params_job)
        render json: job
    end

    def update
        job = Job.find(params[:id])
        job.update(params_job)
        render json: job
    end

    #Delete
    def destroy
        job = Job.find(params[:id])
        job.destroy!
        head :no_content   
    end

    private

    def params_jobs
        params.permit(:title, :description, :payout, :location, :poster_id, :taker_id)
    end

end
