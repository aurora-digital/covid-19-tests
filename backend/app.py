from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from database import update_labs, get_labs

from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

sched = BackgroundScheduler(
    timezone="Europe/London",
    executors={
        "processpool": ProcessPoolExecutor(max_workers=1),
        "threadpool": ThreadPoolExecutor(max_workers=2),
    },
)

sched.add_job(
    update_labs, trigger="cron", hour="12", minute="45", executor="threadpool"
)
sched.start()

# def cron_update():
#     res = update_labs()
#     if res === ?:
#         scheduler.add_job(myfunc, 'interval', minutes=2)
#     else: scheduler.remove_job('my_job_id')
# scheduler.reschedule_job('my_job_id', trigger='cron', minute='*/5')


@app.route("/")
def labs():
    return jsonify([])


@app.route("/api/labs", methods=["GET"])
def api_labs():
    labs = get_labs()
    return make_response(labs)


if __name__ == "__main__":
    app.run()
