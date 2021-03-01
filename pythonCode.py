
from aplicacion.db import db

class Paciente(db.Model)
  _tablename_: 'paciente'

  id= db.column(db.Integer, primary_key=True)
  nombre= db.column(db.string(200), nullable=False)
  numeroHistoria= db.column(db.Integer, nullable=False)
  fuma=db.column(db.Integer, nullable=False)
  tieneDieta=db.column(db.Integer, nullable=False)
  peso=db.column(db.Integer, nullable=False)
  estatura=db.column(db.Integer, nullable=False)


