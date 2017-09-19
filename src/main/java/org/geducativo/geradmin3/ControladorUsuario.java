package org.geducativo.geradmin3;


import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class ControladorUsuario {

   @RequestMapping("/saludar")
    public String hola(){
       String mensaje="Hola cobardesasas ";

       try{
   LecturaCodigos lec=new LecturaCodigos();
           XSSFSheet sheet=lec.leer("info1.xlsx");

           for(int i=0;i<=sheet.getLastRowNum();i++){

               for(int j=0;j<=5;j++){
                  Long valor=    (long) sheet.getRow(i).getCell(j).getNumericCellValue();

                   //repositorioUsuario.save(new Usuario("profesor", valor));

               }
           }

       }catch (Exception e){

           mensaje=e.getMessage();
       }

       return mensaje;
   }

   @RequestMapping(value="/buscar/{codigo}", method = RequestMethod.GET, headers = {"Accept=text/html"})
    public String existe(@PathVariable String codigo){
       String existe="no";
             Long c    =      Long.parseLong(codigo);
            //  Usuario dos=   repositorioUsuario.findByCodigo(c);
              // if(dos!=null){
                 existe="si";
             //  }

     return  "malo"+existe;
   }
}
