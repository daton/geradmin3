package org.geducativo.geradmin3;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Geradmin3Application implements CommandLineRunner {

	//@Autowired RepositorioPrueba repositorioPrueba;
	@Autowired
    RepositorioProfesor repositorioProfesor;
	@Autowired
    RepositorioPlantel repositorioPlantel;
	@Autowired
    RepositorioClave repositorioClave;
	@Autowired
    ReposositorioClaveProfesor reposositorioClaveProfesor;
	public static void main(String[] args) {
		SpringApplication.run(Geradmin3Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
String mensaje="saas";
int filas=0;
		try {
  //for(int i=1;i<=22;i++) {   asasasa
	 // reposositorioClaveProfesor.save(new ClaveProfesor("BINF200" +i));
  //}
			//repositorioProfesor.save(p);
			//repositorioPlantel.save(plantel);
			System.out.println("Si se guardao");



			System.out.println("antes de todo ");
			LecturaCodigos lec=new LecturaCodigos();
			XSSFSheet sheet=lec.leer("info3.xlsx");

			for(int i=0;i<=sheet.getLastRowNum();i++){

				for(int j=0;j<=5;j++){
					Integer valor=    (int) sheet.getRow(i).getCell(j).getNumericCellValue();

					//repositorioClave.save(new Clave(valor));asasas

				}
				filas++;
			}

			System.out.println("Registro encontrados:"+repositorioClave.count());
		}catch (Exception e){
			System.out.println("Este error ocurrio "+e.getMessage());
			mensaje=e.getMessage();
		}


			//System.out.println("Filas habidas " + filas);sdsdsdsd

	}
}
